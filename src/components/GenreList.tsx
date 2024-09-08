import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props{
    onGenreSelected: (genre: Genre) => void;
}

const GenreList = ({onGenreSelected}: Props) => {
  const { data, isLoading, error } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20];

  if (error)
    return null;
  return (
    <List>
      {isLoading && skeletons.map((s) => <GenreSkeleton key={s} />)}
      {data.map((genre) => (
        <ListItem paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onGenreSelected(genre)} fontSize={"lg"} variant={"link"}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
