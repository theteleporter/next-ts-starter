import s from './welcome.module.css'

export const Welcome = () => {
  return (
    <div className={s.welcome}>
      <div className={s.container}>
        <div className={s.box}>
          <p>
            👋 Hi there. You are on The Teleporter <code>next-typescript</code>{' '}
            starter.
          </p>
        </div>

        <h3>Links</h3>
        <div className={s.box}>
          <p>
            📝 You can find some of my gists on my site;
            <a
              target="_blank"
              href="https://theteleporter.site/craft"
              rel="noreferrer"
            >
              Check them out!
            </a>
          </p>
        </div>

        <h3>Utils</h3>
        <div className={s.box}>
          <p>
            🔎 Try pressing <code>ctrl+i</code> or <code>alt+i</code> to inspect
            boxes. Super useful for detecting overflows.
          </p>
        </div>

        <h3>Notes</h3>
        <div className={s.box}>
          <p>
            💣 Pssst... You should delete this welcome component, it's under
            &nbsp;
            <code>./src/components/common/welcome</code>.
          </p>
        </div>

        <h3>Credits</h3>
        <div className={s.box}>
          <p>
            From {' '}
            <a
              href="https://theteleporter.site"
              target="_blank"
              rel="noopener"
              style={{ fontWeight: 'bold', textDecoration: 'none' }}
            >
              The Teleporter.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
