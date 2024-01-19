import { FruitContext } from "../providers/FruitContext";
import { FruitCard } from "./FruitCard";
import { useContext } from "react";

export const FruitList = () => {

    const {fruitList} = useContext(FruitContext)

    return(
        <ul>
            {fruitList.map(fruit => (
                <FruitCard key={fruit.id} fruit={fruit} />
            ))}
        </ul>
    )
}