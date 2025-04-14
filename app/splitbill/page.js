"use client";
import React, { useState } from 'react';

function SplitBillPage() {
	const [showModal, setShowModal] = useState(false);
	const [amount, setAmount] = useState(0)
	console.log({ showModal });

	return (
		<div>
			<button
				onClick={() => setShowModal(!showModal)}
				className='custom-button'
			>
				add expense
			</button>
			{showModal ? (
				<div className='custom-modal'>
					<h2>Modal Title</h2>
					<p>This is the modal content.</p>
					<div>
						<form>
							<div>
								<label htmlFor="amount">Amount:</label>
								<input
									type="number"
									id="amount"
									name="amount"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									placeholder="Enter amount"
									required
								/>
							</div>
							<div>
								<label htmlFor="description">Description:</label>
								<input type="text" id="description" name="description" required />
							</div>
							<div>
								<label htmlFor="users">Select Users:</label>
								<select id="users" name="users" multiple required>
									<option value="user1">User 1</option>
									<option value="user2">User 2</option>
									<option value="user3">User 3</option>
								</select>
							</div>
							<button type="submit" className="custom-button">Submit</button>
						</form>
					</div>
					<div className='button-ctr'>
						<button
							className='custom-button'
							onClick={() => setShowModal(!showModal)}
						>Close</button>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default SplitBillPage