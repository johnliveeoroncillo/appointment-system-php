<Dropdown>
                                                    {/* Your trigger element goes here */}
                                                    <Dropdown.Trigger>
                                                        
                                                    </Dropdown.Trigger>

                                                    {/* Dropdown content goes here */}
                                                    <Dropdown.Content>
                                                        {/* Dropdown links or other content */}
                                                        <button
                                                            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "
                                                            // onClick={() =>
                                                            //     clickToApprove(
                                                            //         item.id
                                                            //     )
                                                            // }
                                                        >
                                                            <ApproveModal />
                                                        </button>
                                                        <Dropdown.Link href="#">
                                                            Decline
                                                        </Dropdown.Link>
                                                        <Dropdown.Link href="#">
                                                            View User Profile
                                                        </Dropdown.Link>
                                                    </Dropdown.Content>
                                                </Dropdown>