import { IRecoilTheme } from "../../styles/IRecoilTheme";
import { RecoilTheme } from "../..";

export interface IImageProps {
    source: { uri: string };
    fill?: boolean | string;
    circle?: boolean;
    kind?: RecoilTheme
}