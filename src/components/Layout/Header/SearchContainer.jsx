import "./header.css"
import { Search } from '@mui/icons-material';

export const SearchContainer = () => {
  return (
    <div>
        <input className='searchContainer'  type="text" placeholder="Buscar producto..." />
        <Search className="searchIcon"/>
    </div>
  )
}
