import React from 'react';

const SearchBox = ({Searchfield, searchChange}) => {
  return(
    <div> 
      <input 
      className = "pa3 ba b--green bg-lightest-blue"
      type="search" 
      placeholder="search robots"
      onChange={searchChange} //getting what is being type
      />
    </div>
  );
}

export default SearchBox;