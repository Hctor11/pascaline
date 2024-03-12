import Navigation from "./Navigation/Navigation"
import Grid from "./Grid/Grid"

const Header = () => {
  return (
    <div className="w-full bg-white">
        <Navigation/>
        <Grid/>
    </div>
  )
}

export default Header