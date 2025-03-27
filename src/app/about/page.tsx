import Header from "../../../components/Header";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="scroll-smooth font-Poppins transition-all duration-200 pointer-events-none">
            <Header opacity={100}/>
            <div className="wireframe-grid relative invert dark:invert-0"></div>
            <section className="h-screen grid grid-cols-1 md:grid-cols-3 items-center justify-center relative p-6 md:p-8 pb-20 gap-2 md:gap-16 snap-start pointer-events-auto overflow-x-clip">
                <div className="text-xs md:text-lg lg:text-xl col-span-1 md:col-span-2 order-2 md:order-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2 duration-200">Hey there!</h1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2 duration-200">I&apos;m <span className="font-bold highlight">Ibrahim Khan</span>,</h2>
                    <p className="mb-4">
a 3D artist and designer with a passion for turning ideas into stunning visuals.
Whether it’s product animation, rendering, or design, I bring concepts to life using <span className="highlight">Blender</span>.
I also have a strong background in CAD modeling and design with <span className="highlight">SolidWorks</span>, ensuring that every project
is not just visually striking but also technically sound.
                    </p>
      <p className="mb-4">
Over the years, I’ve worked with clients to create high-quality <span className="highlight">product renders</span>, <span className="highlight">commercials</span>, and <span className="highlight">assets</span> that help showcase their ideas in the best light.
Whether you need a sleek product showcase, a compelling animation, or detailed CAD models, <span className="highlight">I’m here to make it happen.</span>
      </p>
      <p className="mb-2">
I believe that great design is a mix of creativity and precision, and I love collaborating with clients to bring their visions to reality.
<br/><span className="highlight"> Let’s create something awesome together!</span>
        </p>
                </div>
                {/* Image Section */}
                <div className="flex justify-center self-center order-1 md:order-2">
                    <Image
                        src="/about/me.jpg" // Replace with your actual image path
                        alt="Ibrahim Khan"
                        width={500} // Adjust as needed
                        height={500}
                        className="object-cover rounded-full aspect-square w-sm md:w-4xl border-2 border-accent"
                    />
                </div>
            </section>
        </div>
    );
  }
  