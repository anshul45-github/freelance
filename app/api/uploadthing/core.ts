import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
async function handleAuth() {
    const { userId } = await auth();
    if (!userId) {
        throw new UploadThingError("You must be logged in to upload files");
    }
    return { userId };
}
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(() => { return handleAuth(); })
    .onUploadComplete(() => {}),
    courseAttachment: f(["image"])
    .middleware(() => { return handleAuth(); })
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;