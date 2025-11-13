interface LeadershipMember {
  name: string
  role: string
  description: string
  image: string
}

interface LeadershipGridProps {
  members: LeadershipMember[]
}

export default function LeadershipGrid({ members }: LeadershipGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Headshot */}
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200" />

          {/* Info */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-primary font-medium mb-3">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
