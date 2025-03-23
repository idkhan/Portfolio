import Header from "../../../components/Header";

export default function AboutPage() {
    return (
        <div className="overflow-y-scroll snap-proximity snap-y h-screen font-Poppins transition-all duration-500 pointer-events-none">
            <div className="wireframe-grid relative invert dark:invert-0"></div>
            <Header opacity={100}/>
            <section className="h-screen grid md:grid-cols-2 items-center justify-center relative p-8 pb-20 gap-16 sm:p-20 snap-start pointer-events-auto">
                <div className="text-lg lg:text-xl">
                    <h1 className="text-3xl lg:text-6xl font-medium mb-2">Hey there!</h1>
                    <h2 className="text-3xl lg:text-6xl font-medium mb-2">I&apos;m <span className="font-black">Ibrahim Khan</span>,</h2>
                    <p className="mb-4">
a 3D artist and designer with a passion for turning ideas into stunning visuals.
Whether it’s product animation, rendering, or design, I bring concepts to life using <span className="font-semibold">Blender</span>.
I also have a strong background in CAD modeling and design with <span className="font-semibold">SolidWorks</span>, ensuring that every project
is not just visually striking but also technically sound.
                    </p>
      <p className="mb-4">
Over the years, I’ve worked with clients to create high-quality product renders, commercials, and visual assets that help showcase their ideas in the best light.
Whether you need a sleek product showcase, a compelling animation, or detailed CAD models, I’m here to make it happen.
      </p>
      <p className="mb-2">
I believe that great design is a mix of creativity and precision, and I love collaborating with clients to bring their visions to reality.
<br/><span className="font-semibold"> Let’s create something awesome together!</span>
        </p>
                </div>
            </section>
        </div>
    );
  }
  