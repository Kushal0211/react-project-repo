useEffect is called
1. if there is no dependency array, use Effect is called on every time component renders
2. if there is [] empty dependency array, useEffect is called on just initial render
3. if there is [btnNameReact], i mean if there is any dependency in array, so useeffect will be called everytime that dependency updates