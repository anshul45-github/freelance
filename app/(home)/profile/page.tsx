"use client";

import React, { useState } from "react";
import { Pencil, Camera, Mail, Phone, User, FileText } from "lucide-react";

interface ProfileSection {
  name: string;
  email: string;
  phone: string;
  description: string;
  photo: string | null;
}

function App() {
  const [isEditing, setIsEditing] = useState<Partial<Record<keyof ProfileSection, boolean>>>({});
  const [profile, setProfile] = useState<ProfileSection>({
    name: "",
    email: "",
    phone: "",
    description: "",
    photo: "",
  });

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, photo: imageUrl }));
    }
  };

  const handleEdit = (field: keyof ProfileSection) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field: keyof ProfileSection, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const EditableField = ({
    field,
    value,
    multiline = false,
    icon: Icon,
  }: {
    field: keyof ProfileSection;
    value: string;
    multiline?: boolean;
    icon?: React.ComponentType<any>;
  }) => {
    const [tempValue, setTempValue] = useState(value);

    if (isEditing[field]) {
      return (
        <div className="flex gap-2 w-full">
          {multiline ? (
            <textarea
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              rows={4}
              placeholder={`Enter your ${field}`}
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder={`Enter your ${field}`}
            />
          )}
          <button
            onClick={() => handleSave(field, tempValue)}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Save
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-between group w-full p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
        <div className="flex items-center gap-3 flex-1">
          {Icon && <Icon className="w-5 h-5 text-gray-400" />}
          <div className={`${multiline ? "whitespace-pre-wrap" : ""} flex-1 ${value ? "" : "text-gray-400"}`}>
            {value || `Add your ${field}`}
          </div>
        </div>
        <button
          onClick={() => handleEdit(field)}
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 hover:bg-blue-50 rounded-full"
        >
          <Pencil className="w-4 h-4 text-blue-500" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white bg-white">
                  <img
                    src={profile.photo || "https://via.placeholder.com/150"}
                    alt=""
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer hover:bg-gray-50">
                  <Camera className="w-5 h-5 text-blue-500" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Personal Information</h3>
                <EditableField field="name" value={profile.name} icon={User} />
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <EditableField field="email" value={profile.email} icon={Mail} />
                    <EditableField field="phone" value={profile.phone} icon={Phone} />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">About Me</h3>
                  <EditableField field="description" value={profile.description} multiline icon={FileText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;