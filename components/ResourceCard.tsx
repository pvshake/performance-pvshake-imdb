import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  rating: number;
  image: string;
  releaseYear: string;
}

const ResourceCard = ({ id, title, rating, image, releaseYear }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${id}`}>
        <CardHeader className="flex-center clex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              alt={title}
              width={384}
              height={440}
              className="rouded-md h-full object-cover"
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
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
