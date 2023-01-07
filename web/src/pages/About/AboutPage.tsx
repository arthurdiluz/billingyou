import Button from "@components/Button/Button";
import Container from "@components/Container/Container";
import SidebarLayout from "@components/Layout/SidebarLayout";
import PageTitle from "@components/PageTitle/PageTitle";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

export default function AboutPage() {
  return (
    <SidebarLayout>
      <PageTitle title="About" />
      <Container className="min-w-full max-w-2xl h-fit items-center gap-5 p-10 grid grid-rows-2 grid-cols-2">
        <Button className="flex items-center h-full w-full">
          {<BsPersonCircle className="h-1/3 w-1/3" />}
          <a href="https://arthurdiluz.github.io/" target={"_blank"}>
            {"Personal page"}
          </a>
        </Button>
        <Button className="flex items-center h-full w-full">
          {<BiGitRepoForked className="h-1/3 w-1/3" />}
          <a href="https://github.com/arthurdiluz/billingyou" target={"_blank"}>
            {"Project repository"}
          </a>
        </Button>
        <Button className="flex items-center h-full w-full">
          {<AiFillLinkedin className="h-1/3 w-1/3" />}
          <a href="https://www.linkedin.com/in/arthurdiluz/" target={"_blank"}>
            {"LinkedIn profile"}
          </a>
        </Button>
        <Button className="flex items-center h-full w-full">
          {<AiFillGithub className="h-1/3 w-1/3" />}
          <a href="https://github.com/arthurdiluz" target={"_blank"}>
            {"GitHub Profile"}
          </a>
        </Button>
      </Container>
    </SidebarLayout>
  );
}
