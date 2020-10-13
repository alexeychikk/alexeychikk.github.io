import { SvgIconComponent } from "@material-ui/icons";

declare global {
  declare namespace NodeJS {
    export interface Process {
      browser: boolean;
    }
  }

  type SvgComponent =
    | SvgIconComponent
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
      >;

  type Expect<T extends true> = T;

  type ExpectExtends<VALUE, EXPECTED> = VALUE extends EXPECTED ? true : false;

  type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;

  type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
    ? 1
    : 2
    ? true
    : false;

  type KeysOfUnion<T> = T extends any ? keyof T : never;
}
