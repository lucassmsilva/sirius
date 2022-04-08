import { useState } from "react";

export default function useToggle(defaultValue: boolean) {
    const [value, setValue] = useState<boolean>(defaultValue);

    function toggleValue(value: boolean) {
        setValue(currentValue => !currentValue);
    }

    return [value, toggleValue];
}