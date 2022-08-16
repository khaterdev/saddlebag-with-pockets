import type {FC} from "react";
import type {GetDeepProp} from "~/utils/ts";
import type {WorldsList} from "~/utils/locations/Worlds";

type SelectWorldProps = {
    onSelect: (world: string) => void, dataCenter: string | undefined, world: string | undefined, worlds: GetDeepProp<WorldsList, 'name'> | undefined
}
export const SelectWorld: FC<SelectWorldProps> = ({onSelect, world, dataCenter, worlds}) => {
    const worldDefaultValue = () => {
        if (dataCenter) {
            return world ? world : 'Select your World/Server';
        }
        return `Please select a Data Center`;
    }
    return <select
        key={"world_select"}
        name="world"
        autoComplete="world"
        className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-sm bg-transparent focus:z-10 sm:text-sm border-gray-300"
        defaultValue={worldDefaultValue()}
        onChange={(event) => {
            onSelect(event.target.value)
        }}
    >
        <option disabled hidden>{worldDefaultValue()}</option>
        {worlds && worlds.map((value) => {
            return <option key={value.name}>{value.name}</option>
        })}
    </select>
}
