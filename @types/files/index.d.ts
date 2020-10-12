declare module "*.eot" {
  const path: string;
  export default path;
}

declare module "*.otf" {
  const path: string;
  export default path;
}

type SvgComponent =
  | SvgIconComponent
  | React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

declare module "*.ttf" {
  const path: string;
  export default path;
}

declare module "*.woff" {
  const path: string;
  export default path;
}

declare module "*.woff2" {
  const path: string;
  export default path;
}

declare module "*.mp4" {
  const path: string;
  export default path;
}

declare module "*.webm" {
  const path: string;
  export default path;
}

declare module "*.wav" {
  const path: string;
  export default path;
}

declare module "*.mp3" {
  const path: string;
  export default path;
}

declare module "*.m4a" {
  const path: string;
  export default path;
}

declare module "*.aac" {
  const path: string;
  export default path;
}

declare module "*.oga" {
  const path: string;
  export default path;
}

declare module "*.md" {
  const html: string;
  export default html;
}
