
"use client"

import { 
    NextUIProvider, 
    Card,
    CardHeader, 
    CardBody, 
    CardFooter,
    Image,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { Drink } from "../page";

const qtys: Array<string> = ["1","2","3","4","5","6","7","8","9","10"];

export default async function ProdTable(props: {drinks: Array<Drink>;}){
    
    const cardItems = props.drinks.map((drink, index) =>
        <Card className="py-4" key={index}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{drink.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={drink.imgPath}
                    width={270}
                />
            </CardBody>
            <CardFooter>
                <Select 
                    label="数量を選択してください" 
                    className="max-w-xs float-right" 
                    color="primary" 
                >
                    {qtys.map((qty) => (
                    <SelectItem key={qty} value={qty} className="text-primary" color="primary">
                        {qty}
                    </SelectItem>
                    ))}
                </Select>
            </CardFooter>
        </Card>
    );
    return (
      <NextUIProvider>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
            {cardItems}
        </div>
      </NextUIProvider>
    );
}

