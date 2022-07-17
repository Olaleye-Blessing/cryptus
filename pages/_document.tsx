import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-blue-primary text-white-primary text-opacity-95">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
