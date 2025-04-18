import { Team } from "@/types/teams";

const SingleTeam = ({ feature }: { feature: Team }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp text-center" data-wow-delay=".15s">
        <div className="mb-10 mx-auto p-3 flex h-[170px] w-[170px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <img src={icon} alt={title}/>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleTeam;
