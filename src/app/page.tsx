import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center font-sans">
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="An introduction to who I am and what I do."
        />
      </Head>
      <main className="text-center max-w-4xl p-8">
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm railgun-0402!</h1>
          <p className="text-lg mb-6">
            Welcome to my personal page! I'm a passionate developer who loves
            creating modern, user-friendly applications. With a strong
            background in Next.js, I enjoy solving complex problems and learning
            new technologies.
          </p>
          <p className="text-md mb-4">
            In my free time, I enjoy programing and travel. I'm always open to
            collaborating on interesting projects or discussing new ideas.
          </p>
          <a
            href="https://github.com/railgun-0402"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md"
          >
            Check out my GitHub
          </a>
        </div>
      </main>
      <footer className="mt-8 text-sm text-white/70">
        Made with ❤️ by railgun-0402
      </footer>
    </div>
  );
}
