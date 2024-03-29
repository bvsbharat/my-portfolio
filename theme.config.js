const YEAR = new Date().getFullYear()

export default {
  darkMode:	true,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  footer: (
    <small style={{ display: 'block', marginTop: '10rem' }}>
      <time>{YEAR}</time> © Bharat Bhavnasi.
      <a href="/">bvsbharat.dev</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
