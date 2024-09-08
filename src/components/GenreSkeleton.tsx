import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react'

const GenreSkeleton = () => {
  return (
    <HStack paddingY={"5px"}>
        <Skeleton height="32px" width="32px" borderRadius={8} />
        <SkeletonText width={"100%"} />
    </HStack>
  )
}

export default GenreSkeleton