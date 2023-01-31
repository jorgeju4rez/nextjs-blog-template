export const Footer = (props: {siteName?: string}) => {
   const get_current_year = new Date().getFullYear()

   return(
      <footer>
         &copy; {get_current_year} {props.siteName ? `${props.siteName} -` : ""} Copyright all rights reserved.
      </footer>
   )
}