import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreatePrescription() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Create Prescription</h1>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="patient-name">Patient Name</Label>
          <Input id="patient-name" placeholder="Enter patient name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="medication">Medication</Label>
          <Select>
            <SelectTrigger id="medication">
              <SelectValue placeholder="Select medication" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="med1">Medication 1</SelectItem>
              <SelectItem value="med2">Medication 2</SelectItem>
              <SelectItem value="med3">Medication 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dosage">Dosage</Label>
          <Input id="dosage" placeholder="Enter dosage" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="instructions">Instructions</Label>
          <textarea
            id="instructions"
            placeholder="Enter instructions"
            className="w-full h-32 px-3 py-2 text-sm rounded-md border border-neutral-200 bg-white ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
          />
        </div>
        <Button type="submit">Create Prescription</Button>
      </form>
    </div>
  )
}

