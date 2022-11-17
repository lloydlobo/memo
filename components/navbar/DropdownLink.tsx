import Link from "next/link";
import React from "react";

/**
 * DropdownLink return a Link wrapper for Menu.Items.
 *
 * Type [x: string] is for ...rest parameters.
 * @param {any} props:{[x:string]:any;href:any;children:any;}
 * @returns {JSX.Element}
 */
export function DropdownLink(props: {
  [x: string]: any;
  href?: any;
  children: any;
}): JSX.Element {
  let { href, children, ...rest } = props;
  return (
    <>
      <Link {...rest} href={href}>
        {children}
      </Link>
    </>
  );
}
