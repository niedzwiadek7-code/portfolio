import { Button } from "@/components/ui/button"
import {HStack, Text} from "@chakra-ui/react"

const Demo = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button colorPalette='teal'>Click me</Button>
      <Text
        color='teal'
      > Random text </Text>
    </HStack>
  )
}

export default Demo
