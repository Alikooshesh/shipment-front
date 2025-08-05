import { ArchiveAdd, Star1 } from "iconsax-reactjs";
import Input from "../input";
import { useEffect, useState } from "react";
import { createNewFav, deleteFav, getFavList } from "@/services/dashboard/fav";
import Textarea from "../textArea";

const FavTextarea = ({ favType, onChange, ...props }) => {

    const [newFavInputValue , setNewFavInputValue] = useState("")

  const [value, setValue] = useState("");
  const [favList, setFavList] = useState([]);

  const [isFavListOpen, setIsFavListOpen] = useState(false);

  const fetchFavList = async () => {
    const favs = await getFavList({favType});
    if(Array.isArray(favs)){
        setFavList(favs)
    }
  };

  const addNewFav = async() => {
    if(!newFavInputValue) return;
    const fav = await createNewFav({body : {favType , text : newFavInputValue}})
    if(fav){
        setFavList([...favList , fav])
        setNewFavInputValue("")
    }
  };
  const removeFav = async (id) => {
    await deleteFav({id});
    setFavList(favList.filter(item => item.id !== id))
  };

  useEffect(() => {
    if(!value) return;
    onChange(value);
  }, [value]);

  useEffect(() => {
    fetchFavList();
  }, [favType]);

  return (
    <div className="w-full relative">
      {isFavListOpen && (
        <div className="w-full max-h-[232px] p-[12px] absolute top-[78px] z-[5] bg-white border-[2px] border-[#2996E8] rounded-[8px]">
          <div className="w-full flex gap-[8px]">
            <Input placeholder="Type here to add to your favorites . . ." className="w-full" value={newFavInputValue} onChange={(e)=> setNewFavInputValue(e.target.value)}/>
            <div
              className="size-[48px] rounded-[8px] flex items-center justify-center border-[2px] border-[#38B000]"
              onClick={addNewFav}
            >
              <ArchiveAdd size={24} color="#38B000" />
            </div>
          </div>
          <div className="w-full max-h-[145px] overflow-y-auto mt-[16px]">
            {favList.map((item, index) => (
              <div
                key={item.id}
                className={`w-full min-h-[36px] p-[12px] pr-[8px] flex items-center justify-between gap-[4px] rounded-[8px] ${
                  index % 2 === 0 ? "bg-[#F5F6FA]" : "bg-white"
                }`}
                onClick={() => {
                  setValue(item.text);
                  setIsFavListOpen(false);
                }}
              >
                <p className="text-[#7C7C7C] font-[600] text-[12px]">
                  {item.text}
                </p>
                <button
                  className="min-w-[45px] max-w-[45px] text-[#FF0000] font-[600] text-[12px]"
                  onClick={(e)=>{
                    e.stopPropagation();
                    removeFav(item.id)
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full flex items-start gap-[12px]">
        <Textarea {...props} rows={2} value={value} onChange={(e)=> setValue(e.target.value)}/>
        <div
          className={`min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] flex items-center justify-center border-[2px] rounded-[8px] ${
            isFavListOpen ? "border-[#2996E8]" : "border-[#AAAAAA]"
          } ${props.disabled ? "" : "bg-white"}`}
          onClick={() => setIsFavListOpen(!isFavListOpen)}
        >
          <Star1 size={24} color={isFavListOpen ? "#FFD700" : "#AAAAAA"} />
        </div>
      </div>
    </div>
  );
};

export default FavTextarea;
