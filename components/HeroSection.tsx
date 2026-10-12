import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { FaGithub } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        {/* <span className={title()}>Experienced&nbsp;</span> */}
        <span className={title({ color: "blue" })}>Fullstack Developer&nbsp;</span>
        <br />
        <span className={title()}>Building Scalable Web Applications</span>
        <div className={subtitle({ class: "mt-4" })}>
          Software Engineer with 3+ years of experience building modern web applications, complex CRM systems, and
          reliable digital products.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          target="_blanc"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.telegram}
        >
          <FaTelegramPlane size={20} />
          Telegram
        </Link>
        <Link
          isExternal
          target="_blanc"
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <FaGithub size={20} />
          GitHub
        </Link>
      </div>

      {/* <div className="mt-6">
        <Card radius="md">
          <CardBody className="py-2 px-4 pr-2 ">
            <div className="flex gap-3 items-center">
              <span>Resume (PDF) </span>
              <Button variant="flat" color="primary">
                Download
              </Button>
            </div>
          </CardBody>
        </Card>
      </div> */}
    </section>
  );
};
