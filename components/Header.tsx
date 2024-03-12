import Navigation from "./Navigation/Navigation"
import Grid from "./Grid/Grid"

const Header = () => {
  return (
    <div className="w-full bg-zinc-600">
        <Navigation/>
        <Grid/>
    </div>
  )
}

export default Header