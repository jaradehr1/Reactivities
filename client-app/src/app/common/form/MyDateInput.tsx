import { useField } from "formik";
import { Form } from "semantic-ui-react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker"

export default function MyDateInput(props: Partial<ReactDatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}
            />
            {meta.touched && meta.error ? (
                <div className="ui pointing red basic label">
                    {meta.error}
                </div>
            ) : null}
        </Form.Field>
    )
}