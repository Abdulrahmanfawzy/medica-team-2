import React from "react"
import { Separator } from "@/components/ui/separator"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-muted/40">
            <div className="mx-auto max-w-[1440px] px-6 py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-foreground">MediLink</h2>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            Find your doctor and book appointments in under 60 seconds.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">
                            For Patients
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Find Doctors
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Online Consultation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Join Our Team
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Privacy & Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Terms of service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition-colors hover:text-foreground">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
                    <p>© 2024 MediLink. All rights reserved.</p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="transition-colors hover:text-foreground">
                            <TwitterIcon className="h-4 w-4" />
                        </a>
                        <a href="#" className="transition-colors hover:text-foreground">
                            <FacebookIcon className="h-4 w-4" />
                        </a>
                        <a href="#" className="transition-colors hover:text-foreground">
                            <InstagramIcon className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer