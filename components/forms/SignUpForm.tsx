'use client'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const SignUpForm = () => {
    const handleSubmit = () => {
        // Handle form submission logic here
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <div>
                    {/* <Label className="block text-sm font-medium text-gray-200">
                        Username
                    </Label> */}
                    <Input
                        type="text"
                        placeholder="Username"
                        id="username"
                        name="username"
                        className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
                    />
                </div>

                <div>
                    {/* <Label className="block text-sm font-medium text-gray-200">
                        Email
                    </Label> */}
                    <Input
                        type="email"
                        placeholder="Email"
                        id="Email"
                        name="email"
                        className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
                    />
                </div>

                <div>
                    {/* <Label className="block text-sm font-medium text-gray-200">
                        Password
                    </Label> */}
                    <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
                    />
                </div>
                
                <div className="mt-4">
                    {/* <button
                        disabled={loading}
                        type="submit"
                        className={`${
                            loading ? "bg-gray-600" : "bg-blue-600"
                        } rounded-md w-full px-12 py-3 text-sm font-medium text-white`}
                        >
                        {loading ? "Loading..." : type}
                    </button> */}
                </div>
                    {/* {error && <p className="text-red-500">{error}</p>} */}
            </form>
        </div>
    )
    }

export default SignUpForm
