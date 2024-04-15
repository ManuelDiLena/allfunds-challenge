import { IProduct } from '../service/products';
import { ContainerFav, FavActions, FavInfo, ItemFav, TitleFav } from "../styles/styleFavorites";
import { MdDeleteOutline } from "react-icons/md";

interface FavProps {
  favItems: IProduct[];
  setFavItems: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export function Favorites({ favItems, setFavItems }: FavProps) {

  // Function to remove a favorite from the list
  const deleteItemFav = (item: IProduct) => {
    const updatedFav = favItems.filter((favItem) => favItem.id !== item.id)
    setFavItems(updatedFav)
  }

  return (
    <ContainerFav>
      <TitleFav>Favorites</TitleFav>
      {
        favItems.map((item) => (
          <ItemFav key={item.id}>
            <FavInfo>
              <h3>{item.productName}</h3>
            </FavInfo>
            <FavActions>
              <span onClick={() => deleteItemFav(item)}>
                <MdDeleteOutline />
              </span>
            </FavActions>
          </ItemFav>
        ))
      }
    </ContainerFav>
  );
}