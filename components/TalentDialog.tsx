import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UploadDropzone } from "@uploadthing/react";
import { useState } from "react";

interface TalentDialogProps {
    isValid: boolean;
    isSubmitting: boolean;
}

export function TalentDialog({ isValid, isSubmitting }: TalentDialogProps) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const data = { name, phone, description, skills };
    try {
      const response = await fetch('/api/talent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Data saved successfully:', result);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" disabled={!isValid || isSubmitting}>Join as Talent</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Join as Talent</DialogTitle>
        <DialogDescription>
          Please fill your contact information to join as a talent.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Your full name" className="col-span-3" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input id="phone" placeholder="Your phone number" className="col-span-3" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Personal Description
            </Label>
            <Input id="description" placeholder="A brief description about yourself" className="col-span-3" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="skills" className="text-right">
              Skills
            </Label>
            <Input id="skills" placeholder="Your skills (e.g., JavaScript, React)" className="col-span-3" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
            <Button type="submit" disabled={!isValid || isSubmitting}>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}