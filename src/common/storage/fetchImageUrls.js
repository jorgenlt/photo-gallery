import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const fetchImageUrls = async () => {
  
  const listRef = ref(storage);
  
  const res = await listAll(listRef);
  
  const urls = await Promise.all(
    res.items.map(async (item) => {
      const url = await getDownloadURL(item);
      const tags = item.name.split('--');
      const location = tags[0];
      const category = tags[1];

      return {
        id: item.name,
        src: url,
        category,
        location
      };
    })
  );

  return urls;
  
}

export default fetchImageUrls;