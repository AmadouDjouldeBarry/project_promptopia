import Feed from "@components/Feed";

export const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Share & Discover
        <br className="max-md: hidde "/>
        <span className="orange_gradient text-center">AI-powerd prompts</span>
        </h1>
        <p className="desc text-center">Promptopia is a place where people can 
        discover and share AI ideas in this AI modern world. Every person is welcome in our Website
        </p>

        {/* Feeds */}
        <Feed/>
    </section>
  )
}

export default Home;