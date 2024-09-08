import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onGenreSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreSelected, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3} >Genres</Heading>
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
              <Button
                onClick={() => {
                  onGenreSelected(genre);
                }}
                objectFit={"cover"}
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={
                  genre.id === selectedGenre?.id ? "medium" : "normal"
                }
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
