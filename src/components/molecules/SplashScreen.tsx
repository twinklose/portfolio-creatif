import { Grid } from '@chakra-ui/react'
import Typography from '../atoms/Typography'

export default function SplashScreen(): JSX.Element {
  return (
    <Grid column={10} gap={1}>
      <Grid column={2} row={1}>
        <Typography type="h1" content="Mathieu" />
        <Typography type="h1" content="Dacheux" />
      </Grid>
      <Typography type="p" content="Frontend developer" />
    </Grid>
  )
}
