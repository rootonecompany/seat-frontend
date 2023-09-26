import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

export default function HydrateClient(props: HydrateProps) {
    return <RQHydrate {...props} />;
}
