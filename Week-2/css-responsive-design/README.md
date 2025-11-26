What is responsive Design?
How to make our website more responsive; Media queries;

Keywords;
Responsive Design; Screen sizes; Wireframes.

Responsive Design;
We need to make our websites work for different screen sizes; We need to make wireframes for different screen sizes; Let the browser do the responsive work; (rem is relative to screen size) and (px is a fixed size);
Use responsive tools; Grid, Flex, Dynamic resolutions/measurements, For precision, the last resort is media queries for different sizes;
Media queries; Specific targeters for specific screen sizes;

grid-template-rows/columns/start:end/repeat(auto-fit, minmax (--px, --fr));
gap - size - rem/px/%
object-fit:cover; object-position: top center;
@media (min-width: --px){
.section{
display:flex;
flex-direction: row;
gap: rem;
}
}
