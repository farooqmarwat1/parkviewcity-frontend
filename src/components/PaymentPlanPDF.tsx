import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import type { LahorePaymentPlan } from "@/data/lahorePaymentPlans";

const GOLD  = "#C4973A";
const NAVY  = "#1D2D4E";
const GRAY  = "#58595B";
const LIGHT = "#F7F5F0";
const LINE  = "#E8E3D8";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf",   fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAw.ttf", fontWeight: 700 },
  ],
});

const S = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 44,
    paddingTop: 36,
    paddingBottom: 56,
    fontSize: 9,
    color: GRAY,
  },

  /* ── Header ── */
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingBottom: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: GOLD,
    marginBottom: 22,
  },
  logo: {
    width: 48,
    height: 48,
    objectFit: "contain",
  },
  headerRight: {
    flexDirection: "column",
    gap: 2,
  },
  brandName: {
    fontSize: 16,
    fontWeight: 700,
    color: NAVY,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  cityLabel: {
    fontSize: 9,
    color: GOLD,
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  /* ── Block heading ── */
  blockHeadingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  blockAccent: {
    width: 3,
    height: 18,
    backgroundColor: GOLD,
    borderRadius: 2,
  },
  blockHeading: {
    fontSize: 13,
    fontWeight: 700,
    color: NAVY,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  /* ── Plan block ── */
  planBlock: {
    marginBottom: 18,
  },
  planHeaderRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
    marginBottom: 6,
  },
  planTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: NAVY,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  planType: {
    fontSize: 8,
    color: GOLD,
    letterSpacing: 0.8,
  },

  /* ── Table ── */
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: NAVY,
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 0,
  },
  tableHeaderCell: {
    flex: 1,
    padding: 6,
    fontSize: 7.5,
    fontWeight: 700,
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: LINE,
  },
  tableRowEven: {
    backgroundColor: LIGHT,
  },
  tableRowOdd: {
    backgroundColor: "#FFFFFF",
  },
  tableCell: {
    flex: 1,
    padding: 6,
    fontSize: 8.5,
    color: GRAY,
  },
  notes: {
    marginTop: 5,
    fontSize: 7.5,
    color: "#999",
    fontStyle: "italic",
  },

  /* ── Footer ── */
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 44,
    paddingBottom: 24,
  },
  footerDivider: {
    height: 1,
    backgroundColor: LINE,
    marginBottom: 10,
  },
  footerGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  footerCol: {
    flexDirection: "column",
    gap: 3,
  },
  footerLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: NAVY,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  footerValue: {
    fontSize: 7.5,
    color: GRAY,
  },
  footerWebsite: {
    fontSize: 7.5,
    color: GOLD,
  },
});

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface Props {
  city: string;
  heading: string;
  plans: LahorePaymentPlan[];
  logoUrl: string;
  contact: ContactInfo;
}

export default function PaymentPlanPDF({ city, heading, plans, logoUrl, contact }: Props) {
  return (
    <Document
      title={`${heading} Payment Plan — ParkView City ${city}`}
      author="ParkView City"
    >
      <Page size="A4" style={S.page}>

        {/* Header */}
        <View style={S.header}>
          <Image src={logoUrl} style={S.logo} />
          <View style={S.headerRight}>
            <Text style={S.brandName}>ParkView City</Text>
            <Text style={S.cityLabel}>{city} — Payment Plans</Text>
          </View>
        </View>

        {/* Block heading */}
        <View style={S.blockHeadingRow}>
          <View style={S.blockAccent} />
          <Text style={S.blockHeading}>{heading}</Text>
        </View>

        {/* Plans */}
        {plans.map(plan => (
          <View key={plan.slug} style={S.planBlock} wrap={false}>
            <View style={S.planHeaderRow}>
              <Text style={S.planTitle}>{plan.title}</Text>
              {plan.title.trim().toLowerCase() !== plan.planType.trim().toLowerCase() && (
                <Text style={S.planType}>{plan.planType}</Text>
              )}
            </View>

            {/* Table header */}
            <View style={S.tableHeaderRow}>
              {plan.tableColumns.map((col, ci) => (
                <Text key={ci} style={S.tableHeaderCell}>{col}</Text>
              ))}
            </View>

            {/* Table rows */}
            {plan.tableRows.map((row, ri) => (
              <View
                key={ri}
                style={[S.tableRow, ri % 2 === 0 ? S.tableRowEven : S.tableRowOdd]}
              >
                {row.map((cell, ci) => (
                  <Text key={ci} style={S.tableCell}>{cell}</Text>
                ))}
              </View>
            ))}

            {/* Notes */}
            {plan.notes?.map((note, ni) => (
              <Text key={ni} style={S.notes}>* {note}</Text>
            ))}
          </View>
        ))}

        {/* Footer */}
        <View style={S.footer} fixed>
          <View style={S.footerDivider} />
          <View style={S.footerGrid}>
            <View style={S.footerCol}>
              <Text style={S.footerLabel}>Contact</Text>
              <Text style={S.footerValue}>{contact.phone}</Text>
              <Text style={S.footerValue}>{contact.email}</Text>
            </View>
            <View style={S.footerCol}>
              <Text style={S.footerLabel}>Address</Text>
              <Text style={S.footerValue}>{contact.address}</Text>
            </View>
            <View style={S.footerCol}>
              <Text style={S.footerLabel}>Website</Text>
              <Text style={S.footerWebsite}>www.parkviewcity.com.pk</Text>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  );
}
