import { ArchiveAdd, Star1 } from "iconsax-reactjs";
import Input from "../input";
import { useEffect, useState } from "react";
import Select from "../select";
import { createNewFav, deleteFav, getFavList } from "@/services/dashboard/fav";

const FavSelect = ({ favType, setValue, ...props }) => {

    const [newFavInputValue , setNewFavInputValue] = useState("")

  const [selected, setSelected] = useState(null);
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
    }
  };
  const removeFav = async (id) => {
    await deleteFav({id});
    setFavList(favList.filter(item => item.id !== id))
  };

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  useEffect(() => {
    fetchFavList();
  }, [favType]);

  return (
    <div className="w-full relative">
      {isFavListOpen && (
        <div className="w-full max-h-[232px] p-[12px] absolute top-[60px] bg-white border-[2px] border-[#2996E8] rounded-[8px]">
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
                className={`w-full h-[36px] p-[12px] pr-[8px] flex items-center justify-between gap-[4px] rounded-[8px] ${
                  index % 2 === 0 ? "bg-[#F5F6FA]" : "bg-white"
                }`}
                onClick={() => {
                  setSelected({ label: item.text, value: item.text });
                  setIsFavListOpen(false);
                }}
              >
                <p className="text-[#7C7C7C] font-[600] text-[12px]">
                  {item.text}
                </p>
                <button
                  className="text-[#FF0000] font-[600] text-[12px]"
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

      <div className="w-full flex items-center gap-[12px]">
        <Select
            {...props}
          options={favList.map((item) => ({
            label: item.text,
            value: item.text,
          }))}
          value={selected}
          onChange={(i) => setSelected(i)}
        />
        <div
          className={`size-[48px] flex items-center justify-center border-[2px] rounded-[8px] ${
            isFavListOpen ? "border-[#2996E8]" : "border-[#AAAAAA]"
          }`}
          onClick={() => setIsFavListOpen(!isFavListOpen)}
        >
          <Star1 size={24} color={isFavListOpen ? "#FFD700" : "#AAAAAA"} />
        </div>
      </div>
    </div>
  );
};

export default FavSelect;
