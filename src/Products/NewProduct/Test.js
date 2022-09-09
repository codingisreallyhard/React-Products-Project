<label>SKU </label>
<input type="text" name="SKU" onChange={handleChange} />
 <label>Price($) </label>
 <input type="text" name="name" onChange={handleChange} />
 <label>Type Switcher </label>
 <label>Name </label>
 <input type="text" name="price" onChange={handleChange} />


 <select
 id="productType"
 value={type}
 onChange={handleTypeOnChange}
>
 <option value="typeswitcher">Type Switcher</option>
 <option id="DVD" value="dvd">
   DVD
 </option>
 <option id="Furniture" value="book">
   Book
 </option>
 <option id="Book" value="furniture">
   Furniture
 </option>
</select>

{book && <Book />}
{furniture && <Furniture />}
{dvd && <DVD />}