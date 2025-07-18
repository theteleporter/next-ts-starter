import Hls, { Events } from 'hls.js'
import * as React from 'react'
import { mergeRefs } from 'react-merge-refs'

export type MuxVideoProps = {
  muxSrc: string
} & Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'>

export const MuxVideo = React.forwardRef<HTMLVideoElement, MuxVideoProps>(
  ({ muxSrc, className, ...rest }, ref) => {
    const videoRef = React.useRef<HTMLVideoElement>(null)

    React.useEffect(() => {
      let hls: Hls

      if (videoRef.current) {
        const video = videoRef.current

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = muxSrc
          video.defaultMuted = true
        } else if (Hls.isSupported()) {
          hls = new Hls()
          hls.attachMedia(video)
          hls.on(Events.MEDIA_ATTACHED, () => {
            hls?.loadSource(muxSrc)
            hls?.on(Events.MANIFEST_PARSED, (_event, data) => {
              hls.nextLevel ??= data.levels.length - 1
            })
          })
        } else {
          console.error("This is a legacy browser that doesn't support MSE")
        }
      }

      return () => {
        if (hls) {
          hls.destroy()
        }
      }
    }, [videoRef, muxSrc])

    return (
      <video ref={mergeRefs([videoRef, ref])} className={className} {...rest} />
    )
  }
)

export const getMuxSrc = (playbackId: string) => {
  if (playbackId.startsWith('https://stream.mux.com')) return playbackId
  return `https://stream.mux.com/${playbackId}.m3u8`
}
