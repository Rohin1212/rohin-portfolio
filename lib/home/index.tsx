import { Fragment } from "react";
import { MyNextPage } from "../../shared/types";
import Image from "next/image";
import FeaturedProjectCard from "../../components/ProjectCard";
import {
  FaAws,
  FaBitbucket,
  FaGithub,
  FaJira,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiNetlify,
  SiNodedotjs,
  SiGatsby,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { CONTACT_FORM_DEFAULT_VALUES } from "./constants";

const Home: MyNextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: CONTACT_FORM_DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    toast("Success", { type: "success" });
  };

  const onError: SubmitErrorHandler<FieldValues> = (err) => {
    toast("Error in validating form", { type: "error" });
  };

  return (
    <Fragment>
      <section id="hero" className="md:h-screen">
        <div className="flex flex-col-reverse justify-end pt-8 md:pt-0 md:grid md:grid-cols-3 bg-black h-full">
          <div className="bg-black relative">
            <div className="flex justify-center md:justify-end">
              <div className="md:absolute -right-6 z-10 mt-12">
                <Fade delay={50}>
                  <Image
                    className="rounded-full bg-primary"
                    alt="Rohin Chopra"
                    src="/hero.png"
                    width={300}
                    height={300}
                  />
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:bg-darkGray md:border-l-2 md:border-primary pl-8 rounded-bl-3xl ">
            <div className="md:mt-24 text-4xl lg:text-6xl font-bold text-white">
              <h1 className="mb-4">I&apos;m Rohin Chopra.</h1>
              <h1 className="mb-4">
                <Typewriter
                  onInit={(t) => {
                    t.typeString("A Software Engineer").start();
                  }}
                />
              </h1>
              <h1 className="text-gray mb-8">based in Australia</h1>
              <p className="font-normal text-white max-w-2xl text-lg">
                I&apos;m probably the most passionate engineer you will ever get
                to work with. If you have a great project that needs some
                amazing skills, I&apos;m your guy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="bg-black text-white py-8 px-6">
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl md:text-4xl md:mb-10 mt-4">
            Projects I&apos;ve built
          </h2>
          <div className="mt-2 md:mt-4">
            <FeaturedProjectCard
              name="Make My Career"
              description="Makemycareer is a platform for year 10-12 VCE students to find the perfect university course according to their needs and interest"
              imgUrl="/makemycareer.png"
              tech={[
                <SiTypescript
                  className="text-4xl"
                  title="TypeScript"
                  key="TypeScript"
                />,
                <FaReact className="text-4xl" title="React" key="React" />,
                <SiNextdotjs
                  className="text-4xl"
                  title="Next.js"
                  key="Next.js"
                />,
                <SiTailwindcss
                  className="text-4xl"
                  title="Tailwindcss"
                  key="Tailwindcss"
                />,
                <FaNodeJs className="text-4xl" title="Nodejs" key="Nodejs" />,
                <SiMysql className="text-4xl" title="MySQL" key="MySQL" />,
                <SiGraphql
                  className="text-4xl"
                  title="GraphQL"
                  key="GraphQL"
                />,
                <FaAws className="text-4xl" title="AWS" key="AWS" />,
              ]}
            />
            <FeaturedProjectCard
              isReverse
              className="mt-28"
              name="Digishelf"
              description="With Digishelf you can create digital shelves that store your favorite movies and tv shows which then you can share with friends and family"
              imgUrl="/digishelf.png"
              tech={[
                <SiJavascript
                  className="text-4xl"
                  title="TypeScript"
                  key="TypeScript"
                />,
                <FaReact className="text-4xl" title="React" key="React" />,
                <SiTailwindcss
                  className="text-4xl"
                  title="Tailwindcss"
                  key="Tailwindcss"
                />,
                <FaNodeJs className="text-4xl" title="Nodejs" key="Nodejs" />,
                <SiExpress
                  className="text-4xl"
                  title="Express"
                  key="Express"
                />,
                <FaAws className="text-4xl" title="AWS" key="AWS" />,
              ]}
            />
            <FeaturedProjectCard
              className="mt-28"
              name="Margembie Labradors"
              description="A MERN full stack website for a client who is a dog breeder. This website involved CRUD operations in the admin panel and also displaying those resources in the frontend."
              imgUrl="/margembie-labradors.png"
              tech={[
                <SiJavascript
                  className="text-4xl"
                  title="TypeScript"
                  key="TypeScript"
                />,
                <FaReact className="text-4xl" title="React" key="React" />,
                <SiBootstrap
                  className="text-4xl"
                  title="Bootstrap"
                  key="Bootstrap"
                />,
                <FaNodeJs className="text-4xl" title="Nodejs" key="Nodejs" />,
                <SiExpress
                  className="text-4xl"
                  title="Express"
                  key="Express"
                />,
                <SiMongodb
                  className="text-4xl"
                  title="Mongo DB"
                  key="Mongo DB"
                />,
                <SiNetlify
                  className="text-4xl"
                  title="Netlify"
                  key="Netlify"
                />,
              ]}
            />
          </div>
        </div>
      </section>
      <section id="skills" className="bg-black text-white py-8 px-6">
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl md:text-4xl mb-2 mt-4">Skillset</h2>
          <p className="opacity-80 md:text-lg max-w-xl mb-4">
            With my skills and experience in frontend, backend and cloud I am
            your go to guy to deploy a modern, robust and scalable web
            application.
          </p>
          <div className="mb-12">
            <h3 className="opacity-80 font-semibold text-xl mb-4">
              Languages And Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-y-4 justify-items-center text-5xl md:grid-cols-8 md:gap-y-0 md:text-6xl">
              <SiJavascript title="Javascript" />
              <SiTypescript title="TypeScript" />
              <FaReact title="React" />
              <SiNextdotjs title="Next.js" />
              <SiGatsby title="Gatsby" />
              <SiNodedotjs title="Node.js" />
              <SiTailwindcss title="Tailwindcss" />
              <SiBootstrap title="Bootstrap" />
            </div>
          </div>
          <div className="mb-12">
            <h3 className="opacity-80 font-semibold text-xl mb-4">
              Technologies
            </h3>
            <div className="grid grid-cols-2 gap-y-4 justify-items-center md:grid-cols-8 text-5xl md:text-6xl">
              <SiPostgresql title="PostgreSQL" />
              <SiMysql title="MySQL" />
              <SiMongodb title="MongoDB" />
              <SiDocker title="Docker" />
              <SiFigma title="Figma" />
            </div>
          </div>
          <div>
            <h3 className="opacity-80 font-semibold text-xl mb-4">Services</h3>
            <div className="grid grid-cols-2 gap-y-4 justify-items-center md:grid-cols-8 text-6xl">
              <FaAws title="AWS" />
              <FaGithub title="Github" />
              <FaBitbucket title="BitBucket" />
              <FaJira title="Jira" />
              <SiVercel title="Vercel" />
              <SiNetlify title="Netlify" />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-black text-white pt-12 pb-8 px-6">
        <div className="container mx-auto">
          {" "}
          <div className="md:grid md:grid-cols-2">
            <div className="mb-4 md:mb-0">
              <h2 className="font-bold text-2xl md:text-4xl md:mb-2">
                Let&apos;s talk
              </h2>
              <p className="opacity-80">
                Got any questions or want to reach out to me?
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="mb-4">
                  <label className="block mb-2">Name</label>
                  <Input
                    name="name"
                    register={register}
                    isError={!!errors.name?.message}
                  />
                  <span className="text-danger mt-1">
                    {errors.name?.message}
                  </span>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Email</label>
                  <Input
                    name="email"
                    register={register}
                    isError={!!errors.email?.message}
                  />
                  <span className="text-danger mt-1">
                    {errors.email?.message}
                  </span>
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <Input
                    name="message"
                    register={register}
                    isError={!!errors.message?.message}
                  />
                  <span className="text-danger mt-1">
                    {errors.message?.message}
                  </span>
                </div>
                <Button
                  type="submit"
                  variant={Button.Variants.PRIMARY}
                  className="mt-4 w-full py-4 font-semibold text-lg"
                >
                  Let&apos;s Talk
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;