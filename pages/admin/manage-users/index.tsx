import BreadCrumbs from "@/components/breadcrumbs";

export default function ManageUsers() {
  return (
    <div className="p-4 py-4 space-y-2">
      <BreadCrumbs title="Admin" sub="Kelola User" />
      <main className="space-y-6">
        <section>
          <div className="w-full overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <h1>no</h1>
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <h1>1</h1>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="text-white badge badge-secondary badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>
                    <span className="text-white badge badge-success badge-xl">
                      Active
                    </span>
                  </td>
                  <th>
                    <button className="text-white shadow-md btn btn-info btn-xs">
                      details
                    </button>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>
                    <label>
                      <h1>2</h1>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src="/tailwind-css-component-profile-3@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span className="text-white badge badge-secondary badge-sm">
                      Tax Accountant
                    </span>
                  </td>
                  <td>Red</td>
                  <th>
                    <button className="text-white shadow-md btn btn-info btn-xs">
                      details
                    </button>
                  </th>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>
                    <label>
                      <h1>3</h1>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src="/tailwind-css-component-profile-4@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Rowe-Schoen
                    <br />
                    <span className="text-white badge badge-secondary badge-sm">
                      Office Assistant I
                    </span>
                  </td>
                  <td>Crimson</td>
                  <th>
                    <button className="text-white shadow-md btn btn-info btn-xs">
                      details
                    </button>
                  </th>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>
                    <label>
                      <h1>4</h1>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img
                            src="/tailwind-css-component-profile-5@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Wyman-Ledner
                    <br />
                    <span className="text-white badge badge-secondary badge-sm">
                      Community Outreach Specialist
                    </span>
                  </td>
                  <td>Indigo</td>
                  <th>
                    <button className="text-white shadow-md btn btn-info btn-xs">
                      details
                    </button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
