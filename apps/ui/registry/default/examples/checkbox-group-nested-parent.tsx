"use client"

import * as React from "react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group"
import { Label } from "@/registry/default/ui/label"

const mainPermissions = [
  { id: "view-dashboard", name: "Updated View Dashboard" },
  { id: "manage-users", name: "Updated Manage Users" },
  { id: "access-reports", name: "Updated Access Reports" },
]

const userManagementPermissions = [
  { id: "create-user", name: "Updated Create User" },
  { id: "edit-user", name: "Updated Edit User" },
  { id: "delete-user", name: "Updated Delete User" },
  { id: "assign-roles", name: "Updated Assign Roles" },
]

export default function CheckboxGroupNestedParentDemo() {
  const [mainValue, setMainValue] = React.useState<string[]>([])
  const [managementValue, setManagementValue] = React.useState<string[]>([])

  const managementIsPartial =
    managementValue.length > 0 &&
    managementValue.length !== userManagementPermissions.length

  return (
    <CheckboxGroup
      aria-labelledby="user-permissions-caption"
      value={mainValue}
      onValueChange={(value) => {
        if (value.includes("manage-users")) {
          setManagementValue(userManagementPermissions.map((p) => p.id))
        } else if (
          managementValue.length === userManagementPermissions.length
        ) {
          setManagementValue([])
        }
        setMainValue(value)
      }}
      allValues={mainPermissions.map((p) => p.id)}
    >
      <Label id="user-permissions-caption">
        <Checkbox parent indeterminate={managementIsPartial} />
        Updated User Permissions
      </Label>

      {mainPermissions
        .filter((p) => p.id !== "manage-users")
        .map((p) => (
          <Label key={p.id} className="ms-4">
            <Checkbox value={p.id} />
            {p.name}
          </Label>
        ))}

      <CheckboxGroup
        aria-labelledby="manage-users-caption"
        value={managementValue}
        onValueChange={(value) => {
          if (value.length === userManagementPermissions.length) {
            setMainValue((prev) =>
              Array.from(new Set([...prev, "manage-users"]))
            )
          } else {
            setMainValue((prev) => prev.filter((v) => v !== "manage-users"))
          }
          setManagementValue(value)
        }}
        allValues={userManagementPermissions.map((p) => p.id)}
        className="ms-4"
      >
        <Label id="manage-users-caption">
          <Checkbox parent />
          Updated Manage Users
        </Label>

        {userManagementPermissions.map((p) => (
          <Label key={p.id} className="ms-4">
            <Checkbox value={p.id} />
            {p.name}
          </Label>
        ))}
      </CheckboxGroup>
    </CheckboxGroup>
  )
}
