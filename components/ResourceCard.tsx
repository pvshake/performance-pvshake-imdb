import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";

interface Props {
  id: string;
  title: string;
  description: string;
  rating: number;
  image: string;
  releaseYear: string;
}

const ResourceCard = ({
  id,
  title,
  description,
  rating,
  image,
  releaseYear,
}: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <HoverCard closeDelay={120}>
        <HoverCardTrigger>
          <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <div className="h-fit w-full">
              <Image
                src={image}
                alt={title}
                width={384}
                height={440}
                className="rounded-md h-full object-cover"
              />
            </div>
            <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
              {title}
            </CardTitle>
          </CardHeader>
        </HoverCardTrigger>
        <HoverCardContent className="w-[356px] max-h-fit bg-gray-800 rounded-lg shadow-lg border-gray-500">
          <p className="small-bold text-white mb-2">Descrição:</p>
          <p className="small-regular text-white-800">{description}</p>
        </HoverCardContent>
      </HoverCard>

      <CardContent className="flex-between items-center mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 mt-4 text-white">
          <Image
            src="/yellow-star.png"
            alt="rating-star"
            width={18}
            height={18}
          />
          {rating}
        </div>
        <div className="text-white mt-4 p-0">{releaseYear}</div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
