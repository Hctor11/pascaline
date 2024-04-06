import ContentContainer from "@/components/Utilities/ContentContainer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <ContentContainer asideMenu={false}>
        <>
          <div className="md:w-2/3">
            <Image className="rounded-md mb-6" src='/images/header.png' alt="header" height={500} width={1000}/>
            <h1 className="text-xl font-medium">About</h1>
            <p>
              Hi, Pascaline is an open-source calculator project is designed to empower users with versatile tools for math, statistics, and physics calculations. Whether you`re solving complex equations, analyzing data, or delving into scientific computations, our calculator is here to support your needs.
            </p>
            <br />
            <p>
            With a user-friendly interface and robust functionality, you can perform a wide range of calculations with ease. As an open-source project, this app is freely available on GitHub, encouraging collaboration and contribution from the community. I believe in the power of open development, where ideas can flourish and innovations can thrive
            </p>
          </div>
        </>
      </ContentContainer>
    </div>
  );
};

export default page;
